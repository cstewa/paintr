class StaticPagesController < ApplicationController
  def index
  end

  def create
    @image = Image.create(:url => params[:url], :html => params[:html])
  end

  def all
    @images = Image.all
  end

  def image
    @image = Image.find(params[:id])
  end

end
