 import * as React from 'react';
 import { Suspense } from 'react';
import styles from './TableLoad.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

import { IPricesTable, IRequestedTable, ITaleResultProps } from './ITableLoadProps';
import { IIconProps } from '@fluentui/react';
import { ActionButton } from '@fluentui/react/lib/Button';
import TableLoadWebPart from '../TableLoadWebPart'
//import {renderTableData} from './TableDraw/RenderTableData';
const DownloadButton: IIconProps = { iconName: 'Download' };
import {TableBackEnd} from './Sripts/Tablebackend';
import {getAtachment} from './Sripts/getAtachment'


 async function renderTableData() {
   return await (await TableBackEnd()).map((items, index) => {
      const { RequestName, RequestNumber, Amount, Price, Attachment, Status } = items ;//destructuring
      return (
         <tr key={RequestName}>
            <td>{RequestName}</td>
            <td>{RequestNumber}</td>
            <td>{Amount}</td>
            <td>{Price}</td>
            <td className='opration'>
            <ActionButton iconProps={DownloadButton} allowDisabledFocus onClick={() => this._GetAtachment()}>
            Download
             </ActionButton>
            </td>
            <td>{Status}</td>
         </tr>
      );
   });
}

function _GetAtachment(){
   getAtachment();
}

export interface ITableLoadState {
   TableRow: Array<JSX.Element>
} 

export default class TableLoad extends React.Component<ITaleResultProps, ITableLoadState> {
   public constructor(props) {
      super(props);


      this.state = {
       TableRow: null
      };
    }


  componentDidMount() {
   renderTableData().then(data =>{     
      this.setState({
         TableRow: data
     })
   }
   );
 }

   public render() {
   const  {TableRow}  = this.state;

    return (
      <div className={ styles.tableLoad }>
         <div className={styles.title}> <h1 id='title'>Test 3 table</h1></div>
         <div className={styles.Table}>
         <table id='RequestName'>
            <tbody>
               <tr>
                  <th>Название заказа</th>
                  <th>№Заказа</th>
                  <th>Количество экземпляров</th>
                  <th>Цена</th>
                  <th>Attachment</th>
                  <th>Статус</th>
               </tr>
               {TableRow}
            </tbody>
         </table>
         </div>
      </div>
      );
    }

}


