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
   * For testing of SP PNP, results 403 forbiden
   * **/
   /*
   *meh Returns requested  data as per the requirents in test3 for interns 
   */

  public render(): void {
    const element: React.ReactElement<IRequestTable> = React.createElement(
      TableLoad,
      {
        description: this.properties.description
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