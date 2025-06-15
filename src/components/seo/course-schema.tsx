
import { Helmet } from "react-helmet";
import { generateCourseSchema } from "./schemas";

interface CourseSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  courseMode?: string;
  educationalLevel?: string;
  timeRequired?: string;
  skillLevel?: string;
}

const CourseSchema = ({
  title,
  description,
  url,
  image,
  provider = "Standardthought",
  courseMode = "online",
  educationalLevel = "beginner",
  timeRequired,
  skillLevel = "Beginner"
}: CourseSchemaProps) => {
  const schema = generateCourseSchema({
    title,
    description,
    url,
    image,
    provider,
    courseMode,
    educationalLevel,
    timeRequired,
    skillLevel
  });

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default CourseSchema;
