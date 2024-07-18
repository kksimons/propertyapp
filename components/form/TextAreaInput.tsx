import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={3}
        required
        className='leading-loose'
      />
    </div>
  );
}

const tempDefaultDescription =
  'Experience the charm of a cozy cabin in Latvia, surrounded by a lush forest and tranquil lakes. Featuring a king-size bed, modern amenities including heating, Wi-Fi, and a flat-screen TV. Explore nearby Gauja National Park, with its stunning hiking trails and historical sites. Canoes available for lake adventures. The cabin has a fire pit, kitchenette, and a porch with breathtaking views. Savor fresh local produce from the nearby market. No pets allowed. Enjoy the peacefulness of nature with occasional visits from friendly deer and birds. Perfect for a relaxing and inspiring retreat. Spring brings blooming flowers, and fall offers a vibrant foliage display. Visit our farm store for homegrown and handmade Latvian specialties.';
export default TextAreaInput;
