import { ToolEntry } from '../tools';
import { creativeDesignTools } from './creative-design';
import { aiInfrastructureMLOpsTools } from './ai-infrastructure-mlops';
import { healthcareBiotechnologyTools } from './healthcare-biotechnology';
import { climateSustainabilityTools } from './climate-sustainability';
import { productivityBusinessTools } from './productivity-business';
import { developmentEngineeringTools } from './development-engineering';
import { marketingGrowthTools } from './marketing-growth';
import { researchScienceTools } from './research-science';
import { financeTradingTools } from './finance-trading';
import { educationLearningTools } from './education-learning';
import { healthWellnessTools } from './health-wellness';
import { ecommerceRetailTools } from './ecommerce-retail';
import { contentCreationTools } from './content-creation';
import { securityPrivacyTools } from './security-privacy';
import { gamingEntertainmentTools } from './gaming-entertainment';
import { travelHospitalityTools } from './travel-hospitality';
import { musicEntertainmentTools } from './music-entertainment';
import { sportsFitnessTools } from './sports-fitness';
import { realEstateConstructionTools } from './real-estate-construction';
import { legalComplianceTools } from './legal-compliance';
import { mediaJournalismTools } from './media-journalism';
import { nonprofitSocialImpactTools } from './nonprofit-social-impact';
import { agricultureFoodTools } from './agriculture-food';
import { automotiveTransportationTools } from './automotive-transportation';
import { telecommunicationsIoTTools } from './telecommunications-iot';
import { energyUtilitiesTools } from './energy-utilities';
import { manufacturingIndustry40Tools } from './manufacturing-industry40';
import { governmentPublicSectorTools } from './government-public-sector';
import { aerospaceDefenseTools } from './aerospace-defense';
import { miningResourcesTools } from './mining-resources';
import { waterUtilitiesTools } from './water-utilities';
import { pharmaceuticalsLifeSciencesTools } from './pharmaceuticals-life-sciences';
import { textilesApparelTools } from './textiles-apparel';
import { chemicalsMaterialsTools } from './chemicals-materials';
import { paperForestProductsTools } from './paper-forest-products';
import { metalsMiningTools } from './metals-mining';
import { consumerGoodsRetailTools } from './consumer-goods-retail';
import { luxuryFashionTools } from './luxury-fashion';
import { oilGasTools } from './oil-gas'; // Add this import

// Export all tools from individual category files
export const allTools: ToolEntry[] = [
  ...creativeDesignTools,
  ...aiInfrastructureMLOpsTools,
  ...healthcareBiotechnologyTools,
  ...climateSustainabilityTools,
  ...productivityBusinessTools,
  ...developmentEngineeringTools,
  ...marketingGrowthTools,
  ...researchScienceTools,
  ...financeTradingTools,
  ...educationLearningTools,
  ...healthWellnessTools,
  ...ecommerceRetailTools,
  ...contentCreationTools,
  ...securityPrivacyTools,
  ...gamingEntertainmentTools,
  ...travelHospitalityTools,
  ...musicEntertainmentTools,
  ...sportsFitnessTools,
  ...realEstateConstructionTools,
  ...legalComplianceTools,
  ...mediaJournalismTools,
  ...nonprofitSocialImpactTools,
  ...agricultureFoodTools,
  ...automotiveTransportationTools,
  ...telecommunicationsIoTTools,
  ...energyUtilitiesTools,
  ...manufacturingIndustry40Tools,
  ...governmentPublicSectorTools,
  ...aerospaceDefenseTools,
  ...miningResourcesTools,
  ...waterUtilitiesTools,
  ...pharmaceuticalsLifeSciencesTools,
  ...textilesApparelTools,
  ...chemicalsMaterialsTools,
  ...paperForestProductsTools,
  ...metalsMiningTools,
  ...consumerGoodsRetailTools,
  ...luxuryFashionTools,
  ...oilGasTools, // Add this to the array
];