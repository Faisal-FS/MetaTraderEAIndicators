//+------------------------------------------------------------------+
//|                                          Simple MA Crossover.mq4 |
//|                                  Copyright 2025, MetaQuotes Ltd. |
//|                                             https://www.mql5.com |
//+------------------------------------------------------------------+
#property copyright "Copyright 2025, MetaQuotes Ltd."
#property link      "https://www.mql5.com"
#property version   "1.00"
#property strict
#property indicator_chart_window

#property indicator_buffers 4

#property indicator_color3 Lime
#property indicator_color4 Red

// --- Drawing properties for the MA Lines
#property indicator_label1  "FastMA"
#property indicator_type1   DRAW_LINE
#property indicator_color1  clrYellow
#property indicator_style1  STYLE_SOLID
#property indicator_width1  5

#property indicator_label2  "SlowMA"
#property indicator_type2   DRAW_LINE
#property indicator_color2  clrGreen
#property indicator_style2  STYLE_SOLID
#property indicator_width2  5

//--- input parameters
input int FastMAPeriod = 9;
input int SlowMAPeriod = 50;

//--- indicator buffers
double BuyBuffer[];
double SellBuffer[];
double FastMA_Buffer[];
double SlowMA_Buffer[];

//+------------------------------------------------------------------+
//| Custom indicator initialization function                         |
//+------------------------------------------------------------------+
int OnInit()
  {
//--- indicator buffers mapping
   
   IndicatorBuffers(4);
   SetIndexBuffer(0, BuyBuffer);
   SetIndexBuffer(1, SellBuffer);
   SetIndexStyle(0, DRAW_ARROW, EMPTY, 5, Lime);
   SetIndexArrow(0, 233); // Up arrow
   
   SetIndexStyle(1, DRAW_ARROW, EMPTY, 5, Red);
   SetIndexArrow(1, 234); // Down arrow
   
   SetIndexBuffer(2, FastMA_Buffer);
   SetIndexBuffer(3, SlowMA_Buffer);
   
//---
   return(INIT_SUCCEEDED);
  }
//+------------------------------------------------------------------+
//| Custom indicator iteration function                              |
//+------------------------------------------------------------------+
int OnCalculate(const int rates_total,
                const int prev_calculated,
                const datetime &time[],
                const double &open[],
                const double &high[],
                const double &low[],
                const double &close[],
                const long &tick_volume[],
                const long &volume[],
                const int &spread[])
  {
//---
   
   int counted_bars = IndicatorCounted();
   
   if (counted_bars < 0) return (-1);
   if (counted_bars > 0) counted_bars--;
   
   int limit = Bars - counted_bars;
   
   if (limit < 2) return(0);
   
   for(int i=1;i<rates_total;i++)
     {
      
      double fastMA_prev = iMA(NULL, 0, FastMAPeriod, 0, MODE_SMA, PRICE_CLOSE, i+1);
      double slowMA_prev = iMA(NULL, 0, SlowMAPeriod, 0, MODE_SMA, PRICE_CLOSE, i+1);
      
      double fastMA_curr = iMA(NULL, 0, FastMAPeriod, 0, MODE_SMA, PRICE_CLOSE, i);
      double slowMA_curr = iMA(NULL, 0, SlowMAPeriod, 0, MODE_SMA, PRICE_CLOSE, i);
      
      FastMA_Buffer[i] = fastMA_curr;
      SlowMA_Buffer[i] = slowMA_curr;
      
      if(fastMA_prev < slowMA_prev && fastMA_curr > slowMA_curr)
        {
         
         BuyBuffer[i] = Low[i] - (Point * 10);
         SellBuffer[i] = EMPTY_VALUE;
        }
        else if(fastMA_prev > slowMA_prev && fastMA_curr < slowMA_curr)
      {
      
         SellBuffer[i] = High[i] + (Point * 10);
         BuyBuffer[i] = EMPTY_VALUE;
       
      }
      else
        {
         BuyBuffer[i] = EMPTY_VALUE;
         SellBuffer[i] = EMPTY_VALUE;
              
              
        }
      
     }
   
   
//--- return value of prev_calculated for next call
   return(rates_total);
  }
//+------------------------------------------------------------------+
