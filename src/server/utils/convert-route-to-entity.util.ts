const mapping: Record<string, string> = {
  comments: 'comment',
  organizations: 'organization',
  subscriptions: 'subscription',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
