'use client';

import React, { useState } from 'react';
import Item from './item';

export type dataType = {
  id: number | undefined;
  text: string | undefined;
  desc: string | undefined;
};

const data: dataType[] = [
  {
    id: 1,
    text: 'text 1',
    desc: 'description 1',
  },
  {
    id: 2,
    text: 'text 2',
    desc: 'description 2',
  },
  {
    id: 3,
    text: 'text 3',
    desc: 'description 3',
  },
];

const ListItem = () => {
  let dataProp: dataType | undefined;

  const [dataState, setDataState] = useState<dataType>();

  const changeDataProp = (id: number | undefined) => {
    // dataProp = data.find((d) => d.id === id);
    setDataState(data.find((d) => d.id === id));
    // setDataState();
    // console.log(dataState);
  };

  return (
    <div>
      <div>
        <p>List Item</p>
        <span className="text-sm">Click one of the list for the details</span>
        <div className="my-4 border-solid border-2 p-2">
          {data.map((res) => {
            return (
              <div key={res.id} onClick={() => changeDataProp(res.id)}>
                <p>{res.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {!dataState && <p>No Data Details</p>}
        {dataState && (
          <Item
            id={dataState?.id}
            desc={dataState?.desc}
            text={dataState?.text}
          />
        )}
      </div>
    </div>
  );
};

export default ListItem;
