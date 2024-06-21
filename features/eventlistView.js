class eventlistView{
    constructor(){
        this.addNewEvent = document.querySelector(".add-new-event");
        this.eventTable = document.querySelector(".event-table");
        this.eventTableSave = document.querySelector(".event-table__save");
        this.eventTableEdit = document.querySelector(".event-table__edit");
        this.eventTableDelete = document.querySelector(".event-table__delete");
    }
    //eventName,startDate,endDate
    renderEvent(events){
    const {id,eventName, startDate, endDate} = events;
    const eventRow = document.createElement("tr");
    eventRow.classList.add("event-table-data");
    eventRow.id = id;

    const eventData = document.createElement("td");
    eventData.textContent = eventName;
    const start = document.createElement("td");
    start.textContent = startDate;
    const end = document.createElement("td");
    end.textContent = endDate;
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("event-table__edit");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("event-table__delete");
    deleteBtn.textContent = "Delete";

    eventRow.append(eventData,start,end,editBtn, deleteBtn);
    this.eventTable.appendChild(eventRow);
    }

    renderAddEvent(){
        const eventRow = document.createElement("tr");
        eventRow.classList.add("event-table-data");

        const event = document.createElement("td");
        const inputEvent = document.createElement("input");
        inputEvent.classList.add("event-table__event");
        event.append(inputEvent);

        const starting = document.createElement("td");
        const inputStarting = document.createElement("input");
        inputStarting.classList.add("event-table__start");
        inputStarting.type = "date";
        starting.append(inputStarting);

        const ending = document.createElement("td");
        const inputEnding = document.createElement("input");
        inputEnding.classList.add("event-table__end");
        inputEnding.type = "date";
        ending.append(inputEnding);
       
        const saveBtn = document.createElement("button");
        saveBtn.classList.add("event-table__save");
        saveBtn.textContent = "Save";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("event-table__delete");
        deleteBtn.textContent = "Delete";

        eventRow.append(event,starting,ending,saveBtn, deleteBtn);
        this.eventTable.appendChild(eventRow);
    }

}