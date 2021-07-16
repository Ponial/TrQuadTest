import { ConsoleListener } from '@pnp/logging';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {IRequestedTable } from '../ITableLoadProps';

import {getItemsFromPrices} from './getItemsFromPrices';
import {getItemsFromRequests} from './getItemsFromRequests'

export async function TableBackEnd(): Promise<IRequestedTable[]>{


    var prices = await getItemsFromPrices();
    var requests = await getItemsFromRequests();
    console.log(prices);
    console.log(requests);
    var result = new Array() as IRequestedTable[];
    var OutPut = new Array() as IRequestedTable[];
      function MakeTable(RequestName, RequestNumber, Amount, Price, Attachment, Status){
        this.RequestName = RequestName;
        this.RequestNumber = RequestNumber;
        this.Amount = Amount;
        this.Price = Price;
        this.Attachment = Attachment;
        this.Status = Status;
      }
      for(var i=0; i<(await requests).length; i++){
          if(requests[i].TrNumberOfCopies <= prices[0].Ammount){
            requests[i].TrCurrency = prices[0].Curency;
          }else if(requests[i].TrNumberOfCopies <= prices[0].Ammount) {
            requests[i].TrCurrency = prices[1].Curency;
          }else{
            requests[i].TrCurrency = prices[2].Curency;
              }
      } 
  
      for(var i=0; i<(await requests).length; i++){
        var OrderNumber =("Заказ номер ") + (i + 1) ;
        var OrderID = i + 1;
        result[i] = new MakeTable(OrderNumber, OrderID +"_" + requests[i].TrOrderDate, requests[i].TrNumberOfCopies, requests[i].TrNumberOfCopies * requests[i].TrCurrency, '_' ,requests[i].TrStatus);
        OutPut.push(result[i]);
    }
   // console.log(OutPut);
    return OutPut;
  }