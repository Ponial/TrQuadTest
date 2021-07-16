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
   const result: IRequestTable[] = await sp.web.lists.getByTitle("Request").items.select("Title","TrOderDate","TrStatus","TrNumberOfCopies","TrCurrency","TrResponsile").get();
    //  var result =  [{title : "name1", TrOrderDate : "12.01.01", TrStatus: "Новый", TrNumberOfCopies: 10,TrCurrency: 20, TrResponsible: "dude0"},
    //                   {title : "name2", TrOrderDate : "12.01.01", TrStatus: "Новый", TrNumberOfCopies: 49,TrCurrency: 10, TrResponsible: "dude1"},
    //                   {title : "name3", TrOrderDate : "12.01.01", TrStatus: "В Процессе", TrNumberOfCopies: 300,TrCurrency: 5, TrResponsible: "dude2"},
    //                   {title : "name4", TrOrderDate : "12.01.01", TrStatus: "Отклонен", TrNumberOfCopies: 70,TrCurrency: 10, TrResponsible: "dude3"},
    //                   {title : "name5", TrOrderDate : "12.01.01", TrStatus: "Подтвержден", TrNumberOfCopies: 21,TrCurrency: 10, TrResponsible: "dude4"},
    //                   {title : "name6", TrOrderDate : "12.01.01", TrStatus: "Архив", TrNumberOfCopies: 69,TrCurrency: 10, TrResponsible: "dude5"}]as IRequestTable[];    
    return (result);  


        }