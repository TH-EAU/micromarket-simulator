export const StorageTypes = { cold: 1, basic: 2 };

export const StorageModels = {
  small_fridge: {
    path: "frigogidaire_small",
    capacity: 4,
    type: StorageTypes.cold,
    emplacement: 1,
    boxPosition: 0,
  },
  fridge: {
    path: "frigogidaire",
    capacity: 8,
    type: StorageTypes.cold,
    emplacement: 2,
    boxPosition: 0.5,
  },
  storage: {
    path: "etagere",
    capacity: 10,
    type: StorageTypes.basic,
    emplacement: 2,
    boxPosition: 0.5,
  },
};

export const getStorageModel = (model) => {
  return StorageModels[model];
};
