create schema bloggggggg;

create table bloggggggg.post(
    id:serial primary key,
    title text not null,
    context text not null,
    date timestamp default now()
)