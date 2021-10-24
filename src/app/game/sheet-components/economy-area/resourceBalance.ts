import { ResourceType } from "src/app/common/notification/models/resource-types";

export class ResourceBalance {
    public gain: number;
    public loss: number;
    public resource: ResourceType;

    constructor(resource: ResourceType) {
        this.gain = 0;
        this.loss = 0;
        this.resource = resource;
    }
}