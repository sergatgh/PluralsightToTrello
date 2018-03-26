import { InitializePopupProcessor } from "../InitializePopupProcessor";
import { TrelloBoardRepository, GetTrelloBoardArguments } from "../../../../../feature/ObtainTrelloDestination/Boards";
import { TrelloDataCache, TrelloBoardsCache } from "../../../../../feature/TrelloDataCache";
import { InitializePopupArguments } from "../InitializePopupArguments";

export class CheckCachedData extends InitializePopupProcessor {
    public static readonly Instance = new CheckCachedData();

    async SafeExecute(args: InitializePopupArguments): Promise<void> {
        args.BoardItems = await args.TrelloDataCache.GetLastUsedBoards();
        args.ListItems = await args.TrelloDataCache.GetLastUsedLists();
    }
}