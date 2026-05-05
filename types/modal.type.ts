import { Product } from "./product.type";

export type ViewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
};


export type DeleteModalProps = {
    isOpen: boolean;
    onClose:()=>void;
    product:Product | null;
    onDelete:(id:number) => void;
};

export type EditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onSave: (updatedProduct: Product) => void;
};

export type AddModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newProduct: Product) => void;
};