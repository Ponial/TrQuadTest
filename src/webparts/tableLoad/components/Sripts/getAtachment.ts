import * as React from 'react';
import * as ReactDom from 'react-dom';

import { sp } from "@pnp/sp";
import { IAttachmentInfo } from "@pnp/sp/attachments";
import { IItem } from "@pnp/sp/items/types";
import "@pnp/sp/webs";
import "@pnp/sp/lists/web";
import "@pnp/sp/items";
import "@pnp/sp/attachments";


export async function getAtachment(i){ 
    console.log("Here be Atachment")
    console.log(i);
 // const item: IItem  = await sp.web.lists.getByTitle("Price").items.getById(i);
 // const result = await item.attachmentFiles();
 //  return (result);
    
      }