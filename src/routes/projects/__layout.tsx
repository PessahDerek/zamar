import {createFileRoute, Outlet} from '@tanstack/react-router'
import ProjectCategorySide from "../../components/navigations/project-category-side";

export const Route = createFileRoute('/projects/__layout')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className={"flex w-[95%] h-[calc(100vh-70px)] m-auto"}>
            <ProjectCategorySide/>
            <div className={"flex-1 p-5"}>
                <Outlet/>
            </div>
        </div>
    )
}
