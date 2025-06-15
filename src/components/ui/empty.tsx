
interface EmptyProps {
  message: string;
}

const Empty = ({ message }: EmptyProps) => {
  return (
    <div className="text-center py-16">
      <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70">
        {message}
      </p>
    </div>
  );
};

export default Empty;
