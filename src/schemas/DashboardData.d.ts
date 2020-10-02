interface INameDescriptionItem {
  name: string;
  description: string;
}

interface ICompetitor {
  name: string;
  marketShare: string;
  totalAmount: number;
  geography: string;
}

interface ILocalProducer {
  totalCapacity: number;
  units: string;
  capacityUtilization: string;
}

interface IMarketOverview {
  size: string;
  units: string;
  geography: string;
  geographyScope: string;
  qatarScope: string;
  marketStage: INameDescriptionItem;
  EBITDA: string;
  volatilityDemand: string;
  mecSensitive: INameDescriptionItem;
}

interface ICompetition {
  internationalSupplier: INameDescriptionItem;
  localSupplier: INameDescriptionItem;
  localProducer: ILocalProducer;
  entryBarrier: INameDescriptionItem;
}
interface IIndustryPrioritization {
  externalShocks: INameDescriptionItem;
  sectorPriority: INameDescriptionItem;
}

interface IDashboardData {
  marketOverview: IMarketOverview;
  industryPrioritization: IIndustryPrioritization;
  competitor: ICompetitor[];
  competition: ICompetition;
}
