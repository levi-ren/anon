import mongoose, {
  Model,
  Schema,
  isValidObjectId,
  model,
  models,
} from "mongoose";

export const createModel = <S, T extends Schema>(name: string, schema: T) => {
  return models && name in models
    ? (models[name] as Model<S>)
    : model(name, schema);
};

export const toObjectId = (id: string) => {
  if (isValidObjectId(id)) {
    return new mongoose.Types.ObjectId(id);
  }

  throw new Error("Invalid object ID");
};
