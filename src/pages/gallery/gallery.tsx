import React, { useCallback, useEffect, useState } from "react";
import Item from "../../components/item";
import "./styles.css";
import { IStatus } from "../../constants/status";
import {
  PrepareData,
} from "../../utils/prepareData";
import { FilterOperator, SortOrder } from "../../constants/types";

interface GalleryProps {
  filters: Record<string, { value: any; operator: FilterOperator }>;
  sort: SortOrder;
}

const Gallery: React.FC<GalleryProps> = ({ filters, sort }) => {
  const [items, setItems] = useState<{ title: string; imageUrl: string }[]>([]);
  const [status, setStatus] = useState<IStatus>(IStatus.success);

  const fetchSeries = useCallback(async () => {
    setStatus(IStatus.loading);
    try {
      const response = await fetch("/feed/sample.json");
      const filteredData = await PrepareData(response, filters, sort);
      setItems(filteredData);
      setStatus(IStatus.success);
    } catch (err) {
      console.log(err);
      setStatus(IStatus.error);
    }
  }, [filters, sort]);
  
  useEffect(() => {
    fetchSeries();
  }, [fetchSeries]);


  const displayItems = (items: { title: string; imageUrl: string }[]) => {
    return items.map((item, index) => (
      <div className="item-wrapper" key={index}>
        <Item title={item.title} imageUrl={item.imageUrl} />
      </div>
    ));
  };

  switch (status) {
    case IStatus.success:
      return <div className="content-wrapper">{displayItems(items)}</div>;
    case IStatus.loading:
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    case IStatus.error:
      return (
        <div>
          <span>Oops, something went wrong...</span>
        </div>
      );
    default:
      return null;
  }
};

export default Gallery;
