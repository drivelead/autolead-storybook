import Card from './index';

export default {
  title: 'My Cards',
};

const Template = (arguments_) => <Card {...arguments_} />;

export const GreenCard = Template.bind({});

GreenCard.args = {
  title: 'Lamborghini Urus',
  showSub: false,
  background: 'indigo-600',
  imgUrl:
    'https://cdn-08.imagin.studio/getImage?&customer=gbautolead&make=lamborghini&modelFamily=urus&modelRange=urus&modelVariant=od&modelYear=2019&powerTrain=petrol&bodySize=5&paintId=pspc0007&angle=23',
  Children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?',
};
