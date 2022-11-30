export type ToolBoxMenuType  = ToolBoxMenuItemType[];

export interface ToolBoxMenuItemType {
    id: string;
    title: string;
    icon: React.ReactElement;
    url: string;
}