import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, FilePenIcon, MoreVertical, Trash2Icon } from "lucide-react"
import { Id } from "../../../convex/_generated/dataModel"

import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger }
 from "@/components/ui/dropdown-menu"
import { RemoveDialog } from "@/components/remove-dialog";
import { RenameDialog } from "@/components/rename-dialog";

interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id: Id<"documents">)=> void;
};


export const DocumentMenu = ({documentId, title, onNewTab}: DocumentMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border border-none">
                <MoreVertical className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={()=> onNewTab(documentId)}>
                <ExternalLinkIcon className="size-4" />
                Open in a new tab
              </DropdownMenuItem>
              <RemoveDialog documentId={documentId}>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}
                    onClick={(e)=> e.stopPropagation()}>
                    <Trash2Icon className="size-4 mr-2" />
                    Remove
                </DropdownMenuItem>
              </RemoveDialog>
              <RenameDialog documentId={documentId} initialTitle={title}>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}
                    onClick={(e)=> e.stopPropagation()}>
                    <FilePenIcon  className="size-4 mr-2" />
                    Rename
                </DropdownMenuItem>
              </RenameDialog>
            </DropdownMenuContent> 
        </DropdownMenu>
    )
}