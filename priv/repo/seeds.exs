# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TasktrackerSpa.Repo.insert!(%TasktrackerSpa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias TasktrackerSpa.Repo
  alias TasktrackerSpa.Users.User
  alias TasktrackerSpa.Tasks.Task


  def run do
    p = Comeonin.Argon2.hashpwsalt("password1")
    Repo.delete_all(User)
    a = Repo.insert!(%User{ name: "alice", password_hash: p })
    b = Repo.insert!(%User{ name: "bob", password_hash: p })
    c = Repo.insert!(%User{ name: "carol", password_hash: p })
    d = Repo.insert!(%User{ name: "dave", password_hash: p })

    Repo.delete_all(Task)
  Repo.insert!(%Task{ title: "Alice task", body: "Hi, I'm Alice", time_spent: 15, complete: true, user_id: a.id })
  Repo.insert!(%Task{ title: "Bob task", body: "Hi, I'm Bob", time_spent: 45, complete: false, user_id: b.id })
  Repo.insert!(%Task{ title: "Carol task", body: "Hi, I'm Carol", time_spent: 30, complete: true, user_id: c.id })
   Repo.insert!(%Task{ title: "Dave task", body: "Hi, I'm Dave", time_spent: 30, complete: false, user_id: d.id })

end

end

Seeds.run
