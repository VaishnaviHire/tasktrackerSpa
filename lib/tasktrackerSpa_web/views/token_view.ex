
defmodule TasktrackerSpaWeb.TokenView do
  use TasktrackerSpaWeb, :view

  def render("token.json", %{user: user, token: token}) do
    %{
      user_id: user.id,
      name: user.name,
      token: token,
    }
  end
  

  def render("delete_token.json", %{}) do
    %{}
end

end
