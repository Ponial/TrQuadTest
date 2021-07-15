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
title: string;
TrOrderDate: string;
TrStatus: string;
TrNumberOfCopies:number;
TrCurrency: number;
TrResponsible: string;
  }

export interface IPricesTable{
  Ammount: number;
  Curency: number;
}

export interface ITaleResultProps{
  TableBackEnd: () => IRequestedTable[];
  TeTestingSPsting: () => IPricesTable[];
  }
