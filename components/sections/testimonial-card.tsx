import QuoteIcon from "../../lib/quote-icon";
import AuthorInfo from "./author-info";

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  imageUrl: string;
  imageAlt: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorRole,
  imageUrl,
  imageAlt,
}) => {
  return (
    <article className="flex relative py-24 pr-24 pl-16 rounded-2xl bg-neutral-900 w-[1180px] max-md:flex-col max-md:px-10 max-md:py-16 max-md:w-full max-sm:px-6 max-sm:py-8">
      <QuoteIcon />
      <div className="flex flex-col gap-8 max-w-[664px] max-md:max-w-full">
        <blockquote className="text-3xl font-bold leading-9 text-white max-md:text-2xl max-sm:text-xl">
          {quote}
        </blockquote>
        <AuthorInfo name={authorName} role={authorRole} />
      </div>
      <div className="absolute top-52 w-60 h-0 bg-neutral-700 right-[244px] max-md:hidden" />
      <img
        src={imageUrl}
        className="absolute top-52 w-60 h-60 rounded-2xl right-[101px] max-md:relative max-md:top-auto max-md:right-auto max-md:mt-8 max-md:h-[200px] max-md:w-[200px] max-sm:w-40 max-sm:h-40"
        alt={imageAlt}
      />
    </article>
  );
};

export default TestimonialCard;
