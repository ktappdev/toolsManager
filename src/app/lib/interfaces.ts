export interface iTool {
  id: string;
  toolCreatedDate: Date;
  toolDescription: string | null;
  toolImage: string | null;
  toolName: string;
  toolCategories: string[];
  toolSerialNumber: string | null;
  toolPurchaseDate: Date;
  toolBrand: string;
  toolCondition: string;
  toolAccessories: string[];
}
