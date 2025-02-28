import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/__layout/brand-activation')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/projects/(categories)/brand-activation"!</div>
}
