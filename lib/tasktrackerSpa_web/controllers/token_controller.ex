defmodule TasktrackerSpaWeb.TokenController do
  use TasktrackerSpaWeb, :controller
  alias TasktrackerSpa.Users.User

  action_fallback TasktrackerSpaWeb.FallbackController

  def create(conn, %{"name" => name, "pass" => pass}) do
    with {:ok, %User{} = user} <- TasktrackerSpa.Users.get_and_auth_user(name, pass) do
      token = Phoenix.Token.sign(conn, "auth token", user.id)
      conn
      |> put_status(:created)
      |> render("token.json", user: user, token: token)
    end
  end
  
 def delete(conn, _params) do
      conn
      |> render("delete_token.json")
 end

end
