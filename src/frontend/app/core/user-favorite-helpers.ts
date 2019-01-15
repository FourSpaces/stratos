import { Action } from 'rxjs/internal/scheduler/Action';
import { UserFavorite, UserFavoriteEndpoint } from '../store/types/user-favorites.types';
import { CfAPIResource } from './../store/types/api.types';
import { EndpointModel } from '../store/types/endpoint.types';

export function getFavoriteFromCfEntity(entity, entityKey: string) {
  if (isCfEntity(entity as CfAPIResource)) {
    return new UserFavorite(
      entity.entity.cfGuid,
      'cf',
      entityKey,
      entity.metadata.guid,
    );
  }
  return null;
}

export function getFavoriteFromEndpointEntity(endpoint: EndpointModel) {
  if (isEndpointEntity(endpoint)) {
    return new UserFavoriteEndpoint(
      endpoint.guid,
      endpoint.cnsi_type
    );
  }
  return null;
}

function isEndpointEntity(endpoint: EndpointModel) {
  return endpoint && endpoint.guid && endpoint.cnsi_type;
}

function isCfEntity(entity: CfAPIResource) {
  return entity && entity.entity.cfGuid && entity.metadata && entity.metadata.guid;
}