import * as React from 'react';
import * as ReactDom from 'react-dom';
import {IRequestTable} from '../ITableLoadProps';
import { setup as pnpSetup } from "@pnp/common";

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/attachments";
import { Items } from '@pnp/sp/items';


export async function getItemsFromRequests(): Promise<IRequestTable[]> { 
   const result: IRequestTable[] = await sp.web.lists.getByTitle("Request").items.select("Title","TrOrderDate","TrStatus","TrNumberOfCopies","TrCurrency").get();
      // var result =  [{Title : "name1", TrOrderDate : "12.01.01", TrStatus: "Новый", TrNumberOfCopies: 10,TrCurrency: 20},
      //                 {Title : "name2", TrOrderDate : "12.01.01", TrStatus: "Новый", TrNumberOfCopies: 49,TrCurrency: 10},
      //                 {Title : "name3", TrOrderDate : "12.01.01", TrStatus: "В Процессе", TrNumberOfCopies: 300,TrCurrency: 5},
      //                 {Title : "name4", TrOrderDate : "12.01.01", TrStatus: "Отклонен", TrNumberOfCopies: 70,TrCurrency: 10},
      //                 {Title : "name5", TrOrderDate : "12.01.01", TrStatus: "Подтвержден", TrNumberOfCopies: 21,TrCurrency: 10},
      //                 {Title : "name6", TrOrderDate : "12.01.01", TrStatus: "Архив", TrNumberOfCopies: 69,TrCurrency: 10}]as IRequestTable[];   
    return (result);  


        }