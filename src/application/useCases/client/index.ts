import { GetAllClients } from './getAllClients';
import { CreateClient } from './createClient';
import { UpdateClient } from './updateClient';
import { DeleteClient } from './deleteClient';
import { GetOneClient } from './getOneClient';
import { ExternalGetAllClients } from './externalGetAllClients';
export const ClientUseCases = [
  GetAllClients,
  CreateClient,
  UpdateClient,
  DeleteClient,
  GetOneClient,
  ExternalGetAllClients,
];
