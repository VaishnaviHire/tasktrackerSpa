defmodule TasktrackerSpa.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :body, :string
    field :complete, :boolean, default: false
    field :time_spent, :integer
    field :title, :string
    belongs_to :user, TasktrackerSpa.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :body, :time_spent, :complete, :user_id])
    |> validate_required([:title, :body, :time_spent, :complete, :user_id])
  end
end
