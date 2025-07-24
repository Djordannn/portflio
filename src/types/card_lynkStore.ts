import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeLynkStoreFields {
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

export type TypeLynkStoreSkeleton = EntrySkeletonType<
  TypeLynkStoreFields,
  "lynkStore"
>;
export type TypeLynkStore<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeLynkStoreSkeleton, Modifiers, Locales>;
