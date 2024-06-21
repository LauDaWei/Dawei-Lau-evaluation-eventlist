class eventlistController {
    #model;
    #view;
    constructor(model, view) {
      this.#model = model;
      this.#view = view;
      this.setUp();
    }
  

    setUp() {
      this.setUpAddEvent();
      this.setUpSaveEvent();
      this.fetchEvent();
      this.setUpDeleteEvent();
    }
  
    fetchEvent() {
      eventListAPI.fetchEventAPI().then((events) => {
        this.#model.setEvent(events);
        events.forEach((event) => {
          this.#view.renderEvent(event);
        });
      });
    }
  
    setUpAddEvent() {
      this.#view.addNewEvent.addEventListener("click", (e) => {
        e.preventDefault();
        this.#view.renderAddEvent();
      });
    }
    setUpSaveEvent(){
        this.#view.eventTable.addEventListener("click", (e) =>{
            if(e.target && e.target.classList.contains("event-table__save")){
                e.preventDefault();
                const row = e.target.closest("tr");

                const eventNameInput = row.querySelector(".event-table__event");
                const startDateInput = row.querySelector(".event-table__start");
                const endDateInput = row.querySelector(".event-table__end");

                const newEvent = {
                    eventName:eventNameInput.value,
                    startDate:startDateInput.value,
                    endDate:endDateInput.value,
                }

                eventListAPI.postEventAPI(newEvent).then((_newEvent) => {
                    this.#model.addEvent(_newEvent);
                    this.#view.renderEvent(newEvent);
                    row.remove(); //suppose to be in view but I had no time.
                  });
            }

            
        })
    }
  
    setUpDeleteEvent() {
      this.#view.eventTable.addEventListener("click", (e) => {
        if (e.target.classList.contains("event-table__delete")) {
            e.preventDefault();
            const row = e.target.closest("tr");
            const eventId = row.id;
  
          eventListAPI.deleteEventAPI(eventId).then(() => {
            //this.#model.removeTodo(todoId);
            row.remove(); //suppose to be in view but I had no time.
          });
        }
      });
    }

    //not working. 
    setUpEditEvent() {
        this.#view.eventTable.addEventListener("click", (e) => {
            if (e.target.classList.contains("event-table__edit")) {
                e.preventDefault();
                this.#view.renderAddEvent();

                const row = e.target.closest("tr");
                const eventId = row.id;

                const eventNameInput = row.querySelector(".event-table__event");
                const startDateInput = row.querySelector(".event-table__start");
                const endDateInput = row.querySelector(".event-table__end");

                const newEvent = {
                    eventName:eventNameInput.value,
                    startDate:startDateInput.value,
                    endDate:endDateInput.value,
                }

                eventListAPI.editEventAPI(newEvent).then((_newEvent) => {
                    this.#view.renderEvent(newEvent);
                    row.remove(); //suppose to be in view but I had no time.
                  });

                
            }
        });
    }
  }