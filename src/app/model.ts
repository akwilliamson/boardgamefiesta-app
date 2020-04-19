export type Dollars = number;
export type Points = number;

export enum CattleType {
  DUTCH_BELT= 'DUTCH_BELT',
  BLACK_ANGUS = 'BLACK_ANGUS',
  GUERNSEY = 'GUERNSEY',
  JERSEY = 'JERSEY',
  HOLSTEIN = 'HOLSTEIN',
  BROWN_SWISS = 'BROWN_SWISS',
  AYRSHIRE = 'AYRSHIRE',
  WEST_HIGHLAND = 'WEST_HIGHLAND',
  TEXAS_LONGHORN = 'TEXAS_LONGHORN'
}

export type BreedingValue = number;

export enum DiscColor {
  WHITE = 'WHITE',
  BLACK = 'BLACK'
}

export interface CattleCard {
  readonly breedingValue: BreedingValue;
  readonly points: Points;
  readonly type: CattleType;
}

export interface CattleMarket {
  readonly cards: CattleCard[];
}

export enum ActionType {
  APPOINT_STATION_MASTER = 'APPOINT_STATION_MASTER',
  BUY_CATTLE = 'BUY_CATTLE',
  DELIVER_TO_CITY = 'DELIVER_TO_CITY',
  DISCARD_1_BLACK_ANGUS_TO_GAIN_2_CERTIFICATES = 'DISCARD_1_BLACK_ANGUS_TO_GAIN_2_CERTIFICATES',
  DISCARD_1_BLACK_ANGUS_TO_GAIN_2_DOLLARS = 'DISCARD_1_BLACK_ANGUS_TO_GAIN_2_DOLLARS',
  DISCARD_CARD = 'DISCARD_CARD',
  DISCARD_1_CATTLE_CARD_TO_GAIN_3_DOLLARS_AND_ADD_1_OBJECTIVE_CARD_TO_HAND = 'DISCARD_1_CATTLE_CARD_TO_GAIN_3_DOLLARS_AND_ADD_1_OBJECTIVE_CARD_TO_HAND',
  ADD_1_OBJECTIVE_CARD_TO_HAND = 'ADD_1_OBJECTIVE_CARD_TO_HAND',
  DISCARD_1_CATTLE_CARD_TO_GAIN_1_CERTIFICATE = 'DISCARD_1_CATTLE_CARD_TO_GAIN_1_CERTIFICATE',
  DISCARD_1_DUTCH_BELT_TO_GAIN_2_DOLLARS = 'DISCARD_1_DUTCH_BELT_TO_GAIN_2_DOLLARS',
  DISCARD_1_DUTCH_BELT_TO_GAIN_3_DOLLARS = 'DISCARD_1_DUTCH_BELT_TO_GAIN_3_DOLLARS',
  DISCARD_1_GUERNSEY = 'DISCARD_1_GUERNSEY',
  DISCARD_1_HOLSTEIN_TO_GAIN_10_DOLLARS = 'DISCARD_1_HOLSTEIN_TO_GAIN_10_DOLLARS',
  DISCARD_1_JERSEY_TO_GAIN_1_CERTIFICATE = 'DISCARD_1_JERSEY_TO_GAIN_1_CERTIFICATE',
  DISCARD_1_JERSEY_TO_GAIN_1_CERTIFICATE_AND_2_DOLLARS = 'DISCARD_1_JERSEY_TO_GAIN_1_CERTIFICATE_AND_2_DOLLARS',
  DISCARD_1_JERSEY_TO_GAIN_2_CERTIFICATES = 'DISCARD_1_JERSEY_TO_GAIN_2_CERTIFICATES',
  DISCARD_1_JERSEY_TO_GAIN_2_DOLLARS = 'DISCARD_1_JERSEY_TO_GAIN_2_DOLLARS',
  DISCARD_1_JERSEY_TO_GAIN_4_DOLLARS = 'DISCARD_1_JERSEY_TO_GAIN_4_DOLLARS',
  DISCARD_1_JERSEY_TO_MOVE_ENGINE_1_FORWARD = 'DISCARD_1_JERSEY_TO_MOVE_ENGINE_1_FORWARD',
  DISCARD_1_OBJECTIVE_CARD_TO_GAIN_2_CERTIFICATES = 'DISCARD_1_OBJECTIVE_CARD_TO_GAIN_2_CERTIFICATES',
  DISCARD_2_GUERNSEY_TO_GAIN_4_DOLLARS = 'DISCARD_2_GUERNSEY_TO_GAIN_4_DOLLARS',
  DISCARD_PAIR_TO_GAIN_3_DOLLARS = 'DISCARD_PAIR_TO_GAIN_3_DOLLARS',
  DISCARD_PAIR_TO_GAIN_4_DOLLARS = 'DISCARD_PAIR_TO_GAIN_4_DOLLARS',
  DRAW_CARD = 'DRAW_CARD',
  DRAW_2_CATTLE_CARDS = 'DRAW_2_CATTLE_CARDS',
  EXTRAORDINARY_DELIVERY = 'EXTRAORDINARY_DELIVERY',
  GAIN_1_CERTIFICATE = 'GAIN_1_CERTIFICATE',
  GAIN_1_DOLLAR = 'GAIN_1_DOLLAR',
  GAIN_1_DOLLAR_PER_BUILDING_IN_WOODS = 'GAIN_1_DOLLAR_PER_BUILDING_IN_WOODS',
  GAIN_1_DOLLAR_PER_ENGINEER = 'GAIN_1_DOLLAR_PER_ENGINEER',
  GAIN_2_CERTIFICATES_AND_2_DOLLARS_PER_TEEPEE_PAIR = 'GAIN_2_CERTIFICATES_AND_2_DOLLARS_PER_TEEPEE_PAIR',
  GAIN_2_DOLLARS = 'GAIN_2_DOLLARS',
  GAIN_4_DOLLARS = 'GAIN_4_DOLLARS',
  HIRE_CHEAP_WORKER = 'HIRE_CHEAP_WORKER',
  HIRE_SECOND_WORKER = 'HIRE_SECOND_WORKER',
  HIRE_WORKER = 'HIRE_WORKER',
  MAX_CERTIFICATES = 'MAX_CERTIFICATES',
  MOVE = 'MOVE',
  MOVE_1_FORWARD = 'MOVE_1_FORWARD',
  MOVE_2_FORWARD = 'MOVE_2_FORWARD',
  MOVE_3_FORWARD = 'MOVE_3_FORWARD',
  MOVE_3_FORWARD_WITHOUT_FEES = 'MOVE_3_FORWARD_WITHOUT_FEES',
  MOVE_4_FORWARD = 'MOVE_4_FORWARD',
  MOVE_ENGINE_1_FORWARD = 'MOVE_ENGINE_1_FORWARD',
  MOVE_ENGINE_1_BACKWARDS_TO_GAIN_3_DOLLARS = 'MOVE_ENGINE_1_BACKWARDS_TO_GAIN_3_DOLLARS',
  MOVE_ENGINE_1_BACKWARDS_TO_REMOVE_1_CARD = 'MOVE_ENGINE_1_BACKWARDS_TO_REMOVE_1_CARD',
  MOVE_ENGINE_2_BACKWARDS_TO_REMOVE_2_CARDS = 'MOVE_ENGINE_2_BACKWARDS_TO_REMOVE_2_CARDS',
  MOVE_ENGINE_2_OR_3_FORWARD = 'MOVE_ENGINE_2_OR_3_FORWARD',
  MOVE_ENGINE_AT_LEAST_1_BACKWARDS_AND_GAIN_3_DOLLARS = 'MOVE_ENGINE_AT_LEAST_1_BACKWARDS_AND_GAIN_3_DOLLARS',
  MOVE_ENGINE_AT_MOST_2_FORWARD = 'MOVE_ENGINE_AT_MOST_2_FORWARD',
  MOVE_ENGINE_AT_MOST_3_FORWARD = 'MOVE_ENGINE_AT_MOST_3_FORWARD',
  MOVE_ENGINE_AT_MOST_4_FORWARD = 'MOVE_ENGINE_AT_MOST_4_FORWARD',
  MOVE_ENGINE_AT_MOST_5_FORWARD = 'MOVE_ENGINE_AT_MOST_5_FORWARD',
  MOVE_ENGINE_FORWARD = 'MOVE_ENGINE_FORWARD',
  MOVE_ENGINE_FORWARD_UP_TO_NUMBER_OF_BUILDINGS_IN_WOODS = 'MOVE_ENGINE_FORWARD_UP_TO_NUMBER_OF_BUILDINGS_IN_WOODS',
  PAY_1_DOLLAR_AND_MOVE_ENGINE_1_BACKWARDS_TO_GAIN_1_CERTIFICATE = 'PAY_1_DOLLAR_AND_MOVE_ENGINE_1_BACKWARDS_TO_GAIN_1_CERTIFICATE',
  PAY_1_DOLLAR_TO_MOVE_ENGINE_1_FORWARD = 'PAY_1_DOLLAR_TO_MOVE_ENGINE_1_FORWARD',
  PAY_2_DOLLARS_AND_MOVE_ENGINE_2_BACKWARDS_TO_GAIN_2_CERTIFICATES = 'PAY_2_DOLLARS_AND_MOVE_ENGINE_2_BACKWARDS_TO_GAIN_2_CERTIFICATES',
  PAY_2_DOLLARS_TO_MOVE_ENGINE_2_FORWARD = 'PAY_2_DOLLARS_TO_MOVE_ENGINE_2_FORWARD',
  PLACE_BUILDING = 'PLACE_BUILDING',
  PLACE_CHEAP_BUILDING = 'PLACE_CHEAP_BUILDING',
  PLAY_OBJECTIVE_CARD = 'PLAY_OBJECTIVE_CARD',
  REMOVE_CARD = 'REMOVE_CARD',
  REMOVE_HAZARD = 'REMOVE_HAZARD',
  REMOVE_HAZARD_FOR_5_DOLLARS = 'REMOVE_HAZARD_FOR_5_DOLLARS',
  REMOVE_HAZARD_FOR_FREE = 'REMOVE_HAZARD_FOR_FREE',
  SINGLE_AUXILIARY_ACTION = 'SINGLE_AUXILIARY_ACTION',
  SINGLE_OR_DOUBLE_AUXILIARY_ACTION = 'SINGLE_OR_DOUBLE_AUXILIARY_ACTION',
  TAKE_OBJECTIVE_CARD = 'TAKE_OBJECTIVE_CARD',
  TRADE_WITH_INDIANS = 'TRADE_WITH_INDIANS',
  UPGRADE_ANY_STATION_BEHIND_ENGINE = 'UPGRADE_ANY_STATION_BEHIND_ENGINE',
  UPGRADE_STATION = 'UPGRADE_STATION',
  USE_ADJACENT_BUILDING = 'USE_ADJACENT_BUILDING',
  CHOOSE_FORESIGHTS = 'CHOOSE_FORESIGHTS',
  UNLOCK_BLACK_OR_WHITE = 'UNLOCK_BLACK_OR_WHITE',
  UNLOCK_WHITE = 'UNLOCK_WHITE',
  DOWNGRADE_STATION = 'DOWNGRADE_STATION'
}

export enum Teepee {
  BLUE = 'BLUE',
  GREEN = 'GREEN'
}

export enum Worker {
  COWBOY = 'COWBOY',
  CRAFTSMAN = 'CRAFTSMAN',
  ENGINEER = 'ENGINEER'
}

export enum HazardType {
  FLOOD = 'FLOOD',
  DROUGHT = 'DROUGHT',
  ROCKFALL = 'ROCKFALL'
}

export enum Hands {
  GREEN = 'GREEN',
  BLACK = 'BLACK',
  BOTH = 'BOTH'
}

export interface Hazard {
  readonly type: HazardType;
  readonly points: Points;
  readonly hands: Hands;
}

export interface Tile {
  readonly teepee?: Teepee;
  readonly hazard?: Hazard;
  readonly worker?: Worker;
}

export interface Foresights {
  readonly choices: Tile[][];
}

export interface JobMarketRow {
  readonly cattleMarket: boolean;
  readonly cost: Dollars;
  readonly workers: Worker[];
}

export interface JobMarket {
  readonly rows: JobMarketRow[];
  readonly rowLimit: number;
  readonly currentRowIndex: number;
}

export enum Task {
  BUILDING = 'BUILDING',
  GREEN_TEEPEE = 'GREEN_TEEPEE',
  BLUE_TEEPEE = 'BLUE_TEEPEE',
  HAZARD = 'HAZARD',
  STATION = 'STATION',
  BREEDING_VALUE_3 = 'BREEDING_VALUE_3',
  BREEDING_VALUE_4 = 'BREEDING_VALUE_4',
  BREEDING_VALUE_5 = 'BREEDING_VALUE_5',
  SAN_FRANCISCO = 'SAN_FRANCISCO'
}

export interface ObjectiveCard {
  readonly tasks: Task[];
  readonly points: Points;
  readonly penalty: Points;
  readonly action: ActionType;
}

export type Card = ObjectiveCard | CattleCard;

export enum PlayerColor {
  YELLOW = 'YELLOW',
  RED = 'RED',
  BLUE = 'BLUE',
  WHITE = 'WHITE'
}

export enum Unlockable {
  CERT_LIMIT_6 = 'CERT_LIMIT_6',
  CERT_LIMIT_4 = 'CERT_LIMIT_4',
  EXTRA_STEP_DOLLARS = 'EXTRA_STEP_DOLLARS',
  EXTRA_STEP_POINTS = 'EXTRA_STEP_POINTS',
  EXTRA_CARD = 'EXTRA_CARD',
  AUX_GAIN_DOLLAR = 'AUX_GAIN_DOLLAR',
  AUX_DRAW_CARD_TO_DISCARD_CARD = 'AUX_DRAW_CARD_TO_DISCARD_CARD',
  AUX_MOVE_ENGINE_BACKWARDS_TO_GAIN_CERT = 'AUX_MOVE_ENGINE_BACKWARDS_TO_GAIN_CERT',
  AUX_PAY_TO_MOVE_ENGINE_FORWARD = 'AUX_PAY_TO_MOVE_ENGINE_FORWARD',
  AUX_MOVE_ENGINE_BACKWARDS_TO_REMOVE_CARD = 'AUX_MOVE_ENGINE_BACKWARDS_TO_REMOVE_CARD'
}

export interface Player {
  readonly color: PlayerColor;
  readonly user: User;
}

export interface PlayerState {
  readonly player: Player;
  readonly balance: Dollars;
  readonly cowboys: number;
  readonly craftsmen: number;
  readonly engineers: number;
  readonly certificates: number;
  readonly hand: Card[];
  readonly discardPile: Card[];
  readonly drawStackSize: number;
  readonly unlocked: { [key in Unlockable]: number };
  readonly buildings: string[];
  readonly stationMasters: StationMaster[];
}

export interface Space {
  readonly number?: number;
  readonly turnout?: number;
}

export enum StationMaster {
  PERM_CERT_POINTS_FOR_EACH_2_CERTS = 'PERM_CERT_POINTS_FOR_EACH_2_CERTS',
  PERM_CERT_POINTS_FOR_EACH_2_HAZARDS = 'PERM_CERT_POINTS_FOR_EACH_2_HAZARDS',
  PERM_CERT_POINTS_FOR_TEEPEE_PAIRS = 'PERM_CERT_POINTS_FOR_TEEPEE_PAIRS',
  REMOVE_HAZARD_TEEPEE_POINTS_FOR_EACH_2_OBJECTIVE_CARDS = 'REMOVE_HAZARD_TEEPEE_POINTS_FOR_EACH_2_OBJECTIVE_CARDS',
  GAIN_2_DOLLARS_POINT_FOR_EACH_WORKER = 'GAIN_2_DOLLARS_POINT_FOR_EACH_WORKER'
}

export interface Station {
  readonly players: PlayerColor[];
  readonly stationMaster?: StationMaster;
  readonly worker?: Worker;
}

export enum City {
  KANSAS_CITY = 'KANSAS_CITY',
  TOPEKA = 'TOPEKA',
  WICHITA = 'WICHITA',
  COLORADO_SPRINGS = 'COLORADO_SPRINGS',
  SANTA_FE = 'SANTA_FE',
  ALBUQUERQUE = 'ALBUQUERQUE',
  EL_PASO = 'EL_PASO',
  SAN_DIEGO = 'SAN_DIEGO',
  SACRAMENTO = 'SACRAMENTO',
  SAN_FRANCISCO = 'SAN_FRANCISCO'
}

export interface RailroadTrack {
  readonly players: { [color in PlayerColor]: Space };
  readonly cities: { [city in City]: PlayerColor[] };
  readonly stations: Station[];
}

export enum LocationType {
  START = 'START',
  BUILDING = 'BUILDING',
  HAZARD = 'HAZARD',
  TEEPEE = 'TEEPEE',
  KANSAS_CITY = 'KANSAS_CITY'
}

export interface Building {
  name: string;
  player?: PlayerColor;
}

export interface Location {
  readonly name: string;
  readonly type: LocationType;
  readonly next: string[];
  readonly building?: Building;
  readonly teepee?: Teepee;
  readonly reward?: number;
  readonly hazard?: Hazard;
}

export interface Trail {
  readonly kansasCity: Location;
  readonly start: Location;
  readonly locations: { [name: string]: Location };
  readonly teepeeLocations: { [name: string]: Location };
  readonly playerLocations: { [color in PlayerColor]: string };
}

export interface State {
  readonly player: PlayerState;
  readonly currentPlayer: Player;
  readonly actions: ActionType[];
  readonly cattleMarket: CattleMarket;
  readonly foresights: Foresights;
  readonly jobMarket: JobMarket;
  readonly objectiveCards: ObjectiveCard[];
  readonly otherPlayers: { [color in PlayerColor]: PlayerState };
  readonly playerOrder: PlayerColor[];
  readonly players: { [color in PlayerColor]: Player };
  readonly railroadTrack: RailroadTrack;
  readonly trail: Trail;
  readonly expires: string;
  readonly turn: boolean;
}

export interface User {
  readonly id: string;
  readonly username: string;
  readonly lastSeen: string;
  readonly avatarUrl: string;
}

export interface GamePlayer {
  readonly user: User;
  readonly status: 'INVITED' | 'ACCEPTED' | 'REJECTED';
  readonly color: PlayerColor;
  readonly score?: number;
  readonly winner?: boolean;
}

export interface Game {
  readonly id: string;
  readonly status: 'NEW' | 'STARTED' | 'ENDED';
  readonly accepted: boolean;
  readonly player: GamePlayer;
  readonly otherPlayers: GamePlayer[];
  readonly created: string;
  readonly started: string;
  readonly ended: string;
  readonly expires: string;
  readonly turn: boolean;
  readonly currentPlayer: User;
  readonly owner: User;
  readonly startable: boolean;
}

export interface Action {
  type: ActionType;

  [key: string]: any;
}

export interface CreateGameRequest {
  inviteUserIds: string[];
  beginner: boolean;
}

export interface PossibleMove {
  cost: number;
  steps: string[];
  playerFees: { player: Player; cost: number }[];
}

export interface PossibleDelivery {
  city: City;
  certificates: number;
  reward: number;
}

export interface PossibleBuy {
  cost: number;
  cowboysNeeded: number;
  breedingValues: number[];
}

export enum EventType {
  STARTED = 'STARTED',
  ENDED = 'ENDED',
  INVITED = 'INVITED',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  STATE_CHANGED = 'STATE_CHANGED'
}

export interface Event {
  readonly type: EventType;
  readonly gameId: string;
  readonly userId?: string;
}
