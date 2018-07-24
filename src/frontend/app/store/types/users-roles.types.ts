import { CfUser, CfUserRoleParams, IUserPermissionInOrg, OrgUserRoleNames, SpaceUserRoleNames } from './user.types';

export interface UsersRolesState {
  cfGuid: string;
  users: CfUser[];
  newRoles: IUserPermissionInOrg;
  changedRoles: CfRoleChange[];
}

export interface CfUserRolesSelected {
  [userGuid: string]: {
    [orgGuid: string]: IUserPermissionInOrg
  };
}

export class CfRoleChange {
  userGuid: string;
  orgGuid: string;
  spaceGuid?: string;
  add: boolean;
  role: OrgUserRoleNames | SpaceUserRoleNames;
}

export class CfRoleChangeWithNames extends CfRoleChange {
  userName: string; // Why are all these names set out flat? So we can easily sort in future
  orgName: string;
  spaceName?: string;
  roleName: string;
}

export const UserRoleLabels = {
  org: {
    short: {
      [OrgUserRoleNames.MANAGER]: 'Manager',
      [CfUserRoleParams.MANAGED_ORGS]: 'Manager',
      [OrgUserRoleNames.BILLING_MANAGERS]: 'Billing Manager',
      [CfUserRoleParams.BILLING_MANAGER_ORGS]: 'Billing Manager',
      [OrgUserRoleNames.AUDITOR]: 'Auditor',
      [CfUserRoleParams.AUDITED_ORGS]: 'Auditor',
      [OrgUserRoleNames.USER]: 'User',
      [CfUserRoleParams.ORGANIZATIONS]: 'User'
    },
    long: {
      [OrgUserRoleNames.MANAGER]: 'Org Manager',
      [OrgUserRoleNames.BILLING_MANAGERS]: 'Org Billing Manager',
      [OrgUserRoleNames.AUDITOR]: 'Org Auditor',
      [OrgUserRoleNames.USER]: 'Org User'
    }
  },
  space: {
    short: {
      [SpaceUserRoleNames.MANAGER]: 'Manager',
      [CfUserRoleParams.MANAGED_SPACES]: 'Manager',
      [SpaceUserRoleNames.DEVELOPER]: 'Developer',
      [CfUserRoleParams.SPACES]: 'Developer',
      [SpaceUserRoleNames.AUDITOR]: 'Auditor',
      [CfUserRoleParams.AUDITED_SPACES]: 'Auditor',
    },
    long: {
      [SpaceUserRoleNames.MANAGER]: 'Space Manager',
      [SpaceUserRoleNames.DEVELOPER]: 'Space Developer',
      [SpaceUserRoleNames.AUDITOR]: 'Space Auditor',
    }
  }
};
