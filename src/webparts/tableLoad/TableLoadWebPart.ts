import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TableLoadWebPartStrings';
import TableLoad from './components/TableLoad';
import { IPricesTable, IRequestedTable, IRequestTable } from './components/ITableLoadProps';
import { setup as pnpSetup } from "@pnp/common";

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/attachments";
import { Items } from '@pnp/sp/items';


//sp.setup({  sp: {    baseUrl: this.context.  },}); 
export interface ITableLoadWebPartProps {
  description: string;
}

export default class TableLoadWebPart extends BaseClientSideWebPart<ITableLoadWebPartProps> {

  protected onInit(): Promise<void> {

        return super.onInit().then(_ => {
      
          // other init code may be present
    sp.setup({  sp: {    baseUrl: this.context.pageContext.web.absoluteUrl  },}); 
          pnpSetup({
            spfxContext: this.context
    
          });
        });
      }


  /**
   * getItemsFromPrices Uses SP PNP tp fetch data out of "Price" list(not working)
   */  
private async getItemsFromPrices(){ 
  const result = sp.web.lists.getByTitle("Price").items.select("Title","TrPrices");
    return result;
    }



  /**
   * GetItemsFromRequets Uses SP PNP tp fetch data out of "Request" list(not working)
   */
 private async getItemsFromRequests() { 
const result = sp.web.lists.getByTitle("Request").items.select("Title","TrOderDate","TrStatus","TrNumberOfCopies","TrCurrency","TrResponsile");
    return result;  
    }


  /**
   * For testing of SP PNP, results 403 forbiden
   * **/
  private async TeTestingSPsting() {    
   // const list = sp.web.lists.getByTitle("Price");
   // const allItems = await list.items.expand().get();
    //  console.log(allItems);
    //  const Idk = sp.web.lists.getByTitle("Price").items.select("Title","TrPrices");
    //  console.log(Idk);
     // return Idk;
      console.log(this.getItemsFromPrices());
      console.log(this.getItemsFromRequests());
       }
  /*
   *TableBackEnd Returns requested  data as per the requirents in test3 for interns 
   */
private TableBackEnd(){

  var prices  = [{Ammount: 10, Curency: 20},
                  {Ammount: 50, Curency: 10},
                  {Ammount: 100, Curency: 5},] as IPricesTable[];
  var requests =  [{title : "name1", TrOrderDate : "12.01.01", TrStatus: "Новый", TrNumberOfCopies: 10,TrCurrency: 20, TrResponsible: "dude0"},
                    {title : "name2", TrOrderDate : "12.01.01", TrStatus: "Новый", TrNumberOfCopies: 49,TrCurrency: 10, TrResponsible: "dude1"},
                    {title : "name3", TrOrderDate : "12.01.01", TrStatus: "В Процессе", TrNumberOfCopies: 300,TrCurrency: 5, TrResponsible: "dude2"},
                    {title : "name4", TrOrderDate : "12.01.01", TrStatus: "Отклонен", TrNumberOfCopies: 70,TrCurrency: 10, TrResponsible: "dude3"},
                    {title : "name5", TrOrderDate : "12.01.01", TrStatus: "Подтвержден", TrNumberOfCopies: 21,TrCurrency: 10, TrResponsible: "dude4"},
                    {title : "name6", TrOrderDate : "12.01.01", TrStatus: "Архив", TrNumberOfCopies: 69,TrCurrency: 10, TrResponsible: "dude5"}]as IRequestTable[];
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
    for(var i=0; i<requests.length; i++){
        if(requests[i].TrNumberOfCopies <= prices[0].Ammount){
          requests[i].TrCurrency = prices[0].Curency;
        }else if(requests[i].TrNumberOfCopies <= prices[0].Ammount) {
          requests[i].TrCurrency = prices[1].Curency;
        }else{
          requests[i].TrCurrency = prices[2].Curency;
            }
    } 

    for(var i=0; i<requests.length; i++){
      var OrderNumber =("Заказ номер ") + (i + 1) ;
      var OrderID = i + 1;
      result[i] = new MakeTable(OrderNumber, OrderID +"_" + requests[i].TrOrderDate, requests[i].TrNumberOfCopies, requests[i].TrNumberOfCopies * requests[i].TrCurrency, '_' ,requests[i].TrStatus);
      OutPut.push(result[i]);
  }

  return OutPut;
}

  public render(): void {
    const element: React.ReactElement<IRequestTable> = React.createElement(
      TableLoad,
      {
        TableBackEnd: this.TableBackEnd,
        TeTestingSPsting: this.TeTestingSPsting
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}