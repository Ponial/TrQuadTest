import * as React from 'react';
import * as ReactDom from 'react-dom';
import { IPricesTable } from '../ITableLoadProps';
import { setup as pnpSetup } from "@pnp/common";

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/attachments";
import { Items } from '@pnp/sp/items';


export async function getItemsFromPrices(): Promise<IPricesTable[]>{ 
//   const result: IPricesTable[] = await sp.web.lists.getByTitle("Price").items.select("Title","TrPrices").get();
    var result  = [{Ammount: 10, Curency: 20},
                    {Ammount: 50, Curency: 10},
                    {Ammount: 100, Curency: 5},] as IPricesTable[];
    return (result);
    
      }