import { PropertiesValuesEnum } from '../EventArticle.types';

interface IEventPropertiesItem {
  label: string;
  value: PropertiesValuesEnum;
}

const getLabelColors = (value: string) => {
  switch (value) {
    case 'no':
      return {
        text: 'text-success',
        bg: 'bg-success/10',
      };
    case 'low_level_distraction':
    case 'medium_level_distraction':
      return {
        text: 'text-warning',
        bg: 'bg-warning/10',
      };
    case 'yes':
    case 'high_level_distraction':
      return {
        text: 'text-error',
        bg: 'bg-error/10',
      };
    default:
      return {
        text: 'text-secondary',
        bg: 'bg-secondaryBg',
      };
  }
};

const labelTextByKey = {
  [PropertiesValuesEnum.no]: 'NO',
  [PropertiesValuesEnum.low_level_distraction]: 'LOW',
  [PropertiesValuesEnum.medium_level_distraction]: 'MEDIUM',
  [PropertiesValuesEnum.yes]: 'YES',
  [PropertiesValuesEnum.high_level_distraction]: 'HIGH',
};

export const EventPropertiesItem = ({ label, value }: IEventPropertiesItem) => {
  const colors = getLabelColors(value);
  // Humanize the key to a more readable format
  const readableKey = label.replace(/_/g, ' ').replace(/\b\w/g, (word) => word.toUpperCase());
  const valueFallback = value.toString().toUpperCase().replace(/_/g, ' ');

  return (
    <li className="flex items-center justify-between">
      <span className="text-xl">{readableKey}</span>
      <span className={`${colors.bg} ${colors.text} rounded-3xl px-3 py-2 font-semibold`}>
        {labelTextByKey[value] || valueFallback}
      </span>
    </li>
  );
};
