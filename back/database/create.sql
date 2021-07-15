create schema bbbbblog;

create table bbbblog.post(
    id:serial primary key,
    title text not null,
    context text not null,
    date timestamp default now()
)