 import * as React from 'react';
import styles from './TableLoad.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

import { ITaleResultProps } from './ITableLoadProps';
import { IIconProps } from '@fluentui/react';
import { ActionButton } from '@fluentui/react/lib/Button';

const DownloadButton: IIconProps = { iconName: 'Download' };

export default class TableLoad extends React.Component<ITaleResultProps, {}> {
   public constructor(props) {
      super(props);


      this.state = {
        items: []
      };
    }

  

  private  _GetItems = () => {
    console.log("Attempt to PNP SP1");
   var item = this.props.TeTestingSPsting();
    console.log(item);
    console.log("Attempt to PNP SP2");
  }

  private Tableget(){
    var items = this.props.TableBackEnd();
    console.log(items);
    return items;
  }

 private renderTableData() {
    return this.Tableget().map((items, index) => {
       const { RequestName, RequestNumber, Amount, Price, Attachment, Status } = items ;//destructuring
       return (
          <tr key={RequestName}>
             <td>{RequestName}</td>
             <td>{RequestNumber}</td>
             <td>{Amount}</td>
             <td>{Price}</td>
             <td className='opration'>
             <ActionButton iconProps={DownloadButton} allowDisabledFocus onClick={() => this._GetItems()}>
             Download
              </ActionButton>
             </td>
             <td>{Status}</td>
          </tr>
       );
    });
 }
//{this.renderTableHeader()}

    public render() {
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
               {this.renderTableData()}
            </tbody>
         </table>
         </div>
      </div>
      );
    }

}

