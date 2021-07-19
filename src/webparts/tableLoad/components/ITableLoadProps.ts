export interface ITableLoadProps {
  description: string;
}

export interface IRequestedTable{
RequestName: string;
RequestNumber: string;
Amount: number;
Price: number;
Status: string;
Attachment: any;
}

export interface IRequestTable{
Title: string;
TrOrderDate: string;
TrStatus: string;
TrNumberOfCopies:number;
TrCurrency: number;
  }

export interface IPricesTable{
  Title: string;
  TrPrices: number;
}

export interface Iatachemnt{

}

export interface ITaleResultProps{
  MainWebCaller: () => IRequestedTable[];
  TeTestingSPsting: () => IPricesTable[];
  }
