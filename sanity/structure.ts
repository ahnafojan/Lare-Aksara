import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Lare Aksara')
    .items([
      S.documentTypeListItem('program').title('Program'),
      S.documentTypeListItem('event').title('Event'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['program', 'event'].includes(item.getId()!),
      ),
    ])
