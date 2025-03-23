// components/FooterContactInfo.tsx
interface ContactInfoProps {
  label: string;
  value: string;
  isEmail?: boolean;
}

const FooterContactInfo: React.FC<ContactInfoProps> = ({ label, value, isEmail = false }) => {
  return (
    <p className="text-sm text-gray-600 dark:text-gray-300">
      <span className="font-medium">{label}: </span>
      {isEmail ? (
        <a
          href={`mailto:${value}`}
          className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
        >
          {value}
        </a>
      ) : (
        <a
          href={`tel:${value.replace(/\s/g, '')}`}
          className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
        >
          {value}
        </a>
      )}
    </p>
  );
};

export default FooterContactInfo;
