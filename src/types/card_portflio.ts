import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePortflioProjectFields {
  title: EntryFieldTypes.Symbol;
  img: EntryFieldTypes.AssetLink;
  badge?: EntryFieldTypes.Symbol;
  url?: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  badge2?: EntryFieldTypes.Symbol;
  badge3?: EntryFieldTypes.Symbol;
  badge4?: EntryFieldTypes.Symbol;
  badge5?: EntryFieldTypes.Symbol;
}

export type TypePortflioProjectSkeleton = EntrySkeletonType<
  TypePortflioProjectFields,
  "portflioProject"
>;
export type TypePortflioProject<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePortflioProjectSkeleton, Modifiers, Locales>;
