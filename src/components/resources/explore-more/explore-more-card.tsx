
import { useNavigate } from "react-router-dom";
import { getCardStyles } from './card-styles';
import CardIcon from './card-icon';
import CardTitle from './card-title';
import CardDescription from './card-description';
import CardButton from './card-button';
import CardAccents from './card-accents';

interface ExploreMoreCardProps {
  topic: {
    title: string;
    description: string;
    icon: any;
    route: string;
    color: string;
    bgGradient: string;
  };
  index: number;
}

const ExploreMoreCard = ({ topic, index }: ExploreMoreCardProps) => {
  const navigate = useNavigate();
  const IconComponent = topic.icon;

  return (
    <div
      onClick={() => navigate(topic.route)}
      className="group relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl bg-transparent backdrop-blur-sm"
      style={getCardStyles(index)}
    >
      <CardAccents color={topic.color} />
      
      <CardIcon IconComponent={IconComponent} color={topic.color} />

      {/* Enhanced street-style content with proper hierarchy */}
      <div className="relative z-10 px-6 pb-6">
        <CardTitle title={topic.title} color={topic.color} />
        <CardDescription description={topic.description} />
        <CardButton />
      </div>
    </div>
  );
};

export default ExploreMoreCard;
