import { dataType } from './list-item';

export default function Item(props: dataType | undefined) {
  return (
    <div>
      <p className="text-xl mb-3">Data Details</p>

      <p>
        id: <span>{props?.id}</span>
      </p>
      <p>
        text: <span>{props?.text}</span>
      </p>
      <p>
        description: <span>{props?.desc}</span>
      </p>
    </div>
  );
}
